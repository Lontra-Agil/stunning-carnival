export type InjectNull<T> = {
  [K in keyof T]: T[K] | null;
};
