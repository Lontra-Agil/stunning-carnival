"use client";

import { Dialog } from "@/components/dialog/dialog";
import { FilledButton } from "@/components/filled-button/filled-button";
import { Select } from "@/components/select/select";
import { zodResolver } from "@hookform/resolvers/zod";
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
// import { updateLanguageSchema } from "@/schemas/update-language.schema";
import { useAppDispatch, useAppSelector } from "@/store/store";
import SYSTEM_LANGUAGES from "@/i18n/available-system-languages.json";
export interface LandingPageUpdateLanguageDialogProps {
  show: boolean;
  showStateSetter: Function;
  isLoading: boolean;
  onSubmitUpdateLanguageForm: Function;
  isFetchingLanguages: boolean;
}

const LandingPageUpdateLanguageDialog = ({
  showStateSetter,
  isLoading,
  show,
  isFetchingLanguages,
  onSubmitUpdateLanguageForm,
}: LandingPageUpdateLanguageDialogProps) => {
  const lang = useAppSelector((state) => state.system.lang);

  const {
    register,
    handleSubmit,
    reset,
    control,
    formState: { errors, defaultValues },
  } = useForm({
    defaultValues: {
      language: undefined,
    },
    resolver: zodResolver({ description: {} } as any), //updateLanguageSchema),
  });

  const onSubmit = (updateLanguageRequest: { language?: string }) => {
    onSubmitUpdateLanguageForm(updateLanguageRequest);
  };

  useEffect(() => {
    reset(defaultValues);
  }, [show]);

  const dispatch = useAppDispatch();

  const [_lang, _setLang] = useState(lang);

  const languages = SYSTEM_LANGUAGES.map((lang) => ({
    label: `${lang.language_name} - ${lang.region_name}`,
    value: lang.language_code,
  }));

  return (
    <>
      <Dialog
        onSubmit={handleSubmit(onSubmit)}
        show={show}
        dialogBody={
          <>
            <Select
              menuPortalTarget={document.body}
              control={control}
              placeholder={"Selecione a língua"}
              defaultValue={languages?.find((l: any) => {
                return l.value == _lang;
              })}
              onChange={(newValue: any) => _setLang(newValue?.value)}
              style={{ width: "100%" }}
              name="language"
              options={languages}
              isLoading={isFetchingLanguages}
            />
          </>
        }
        dialogFooter={
          <div>
            <FilledButton
              onClick={() => showStateSetter(false)}
              buttonType="secondary"
              label={"Cancelar"}
            />
            <FilledButton
              type="submit"
              style={{ marginLeft: 8 }}
              buttonType="primary"
              label={"Salvar"}
              isLoading={isLoading}
            />
          </div>
        }
        dialogTitle={"Selecionar Língua de Utilização"}
      />
    </>
  );
};

export { LandingPageUpdateLanguageDialog };
