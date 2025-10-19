import "./dialog.css";

import { useEffectExcludingFirstRender } from "@/hooks/use-effect-excluding-fIrst-render";
import type { FormEventHandler, JSX } from "react";

export interface DialogProps extends Partial<HTMLElement> {
	dialogTitle?: JSX.Element | string;
	dialogBody?: JSX.Element | string;
	dialogFooter?: JSX.Element | string;
	dialogDescription?: JSX.Element | string;
	onSubmit?: FormEventHandler<HTMLFormElement>;
	onDialogHide?: () => void;
	show?: boolean | string | undefined | null;
}

const Dialog = ({
	dialogTitle,
	dialogDescription,
	dialogBody,
	dialogFooter,
	show = false,
	onDialogHide,
	onSubmit,
}: DialogProps) => {
	useEffectExcludingFirstRender(() => {
		if (!show) {
			onDialogHide?.();
		}
	}, [show]);

	const dialog = (
		<div
			style={{
				position: "absolute",
				top: 0,
				left: 0,
				right: 0,
				zIndex: 2,
				pointerEvents: "auto",
			}}
		>
			<div>
				{/* TODO: ADD FOCUS LOCK AND IMPROVMENT TO FOCUS MANAGEMENT SYSTEM*/}

				<div data-focus-lock-disabled="false">
					<div className="modal-root modal-is-open">
						<div className="modal-backdrop" />
						<div className="modal-dialog-container">
							<div
								className="modal-dialog modal-size-medium"
								tabIndex={-1}
								aria-modal="true"
							>
								<div className="modal-header heading-medium">{dialogTitle}</div>

								<div style={{ paddingLeft: 20, paddingRight: 20 }}>
									<p
										style={{
											marginInlineStart: 0,
											marginInlineEnd: 0,
											unicodeBidi: "isolate",
										}}
									>
										{dialogDescription}
									</p>
								</div>

								<div
									style={{ borderBottom: "1px solid var(--gray-100)" }}
									className="modal-body body-small mt-5"
								>
									<div className="items-stretch">{dialogBody}</div>
								</div>
								<div className="modal-footer">{dialogFooter}</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);

	return (
		<>
			{show && (onSubmit ? <form onSubmit={onSubmit}>{dialog}</form> : dialog)}
		</>
	);
};

export { Dialog };
