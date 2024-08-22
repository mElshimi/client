import { ReactNode } from "react";
import { Control, FieldValues, PathValue, Path } from "react-hook-form";

export interface INavProps {
  className?: string;
  links: { name: string; path: string }[];
}
export interface IAnimatedHamburgerButtonProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
}
export interface IDrawerProps {
  active: boolean;
  setActive: React.Dispatch<React.SetStateAction<boolean>>;
  links: { name: string; path: string }[];
}
type TLoading = "idle" | "pending" | "succeeded" | "failed";

export interface ITrip {
  id: string;
  tripName: string;
  description: string;
  imgCover: string;
  category: string;
  images: string[];
  price: number;
  createdAt: string;
  updatedAt: string;
}

export interface ITrips {
  records: ITrip[];
  loading: TLoading;
  error: string | null;
}

export interface IListProps {
  icon: React.ReactNode;
  title: string;
  des: string;
}

export interface ILoadingProps {
  status: TLoading;
  error: null | string;
  children: React.ReactNode;
}

export interface IRenderListProps<T> {
  records: T[];
  renderItem: (record: T) => React.ReactNode;
  className: string;
}

export interface ITripProps {
  trip: ITrip;
}

type TType = "text" | "number" | "email";

export interface ITextFieldProps<TFieldValue extends FieldValues> {
  icon?: React.ReactNode;
  name: Path<TFieldValue>;
  label: string;
  error?: string;
  type?: TType;
  placeholder: string;
  control: Control<TFieldValue>;
  defaultValue?: PathValue<TFieldValue, Path<TFieldValue>>;
}

export interface ISubmitForm {
  children: ReactNode;
  disabled?: boolean;
  className?: string;
}

export interface ICategory {
  id: string;
  categoryName: string;
  description: string;
  img: string;
  createdAt: string;
  updatedAt: string;
}

export interface ICategories {
  records: ICategory[];
  loading: TLoading;
  error: string | null;
}

export interface IAuthState {
  loading: TLoading;
  error: string | null;
}

export interface IFormData {
  name: string;
  email: string;
  password: string;
  Repassword: string;
  phone: string;
}
