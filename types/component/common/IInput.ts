import type { ITable } from "@/types/component/common/ITable";
import type { FieldAttributes } from "formik";
import type { ComponentPropsWithoutRef } from "react";

export interface ITextInput
  extends Omit<React.DetailedHTMLProps<React.InputHTMLAttributes<HTMLInputElement>, HTMLInputElement>, "handleChange"> {
  title?: string;
  name?: string;
  handleChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder?: string;
  isError?: boolean;
  isViewMode?: boolean;
}

export interface ITextFormInputField extends FieldAttributes<any> {
  id?: string;
  title: string;
  required?: boolean;
}

export interface ITextSearchInput extends Omit<ComponentPropsWithoutRef<"input">, "onChange" | "autoFocus" | "size"> {
  placeholder: string;
  delay?: number;
  value?: string;
  onTextChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  autoFocus?: boolean;
  size?: "small" | "medium";
}

export interface ICheckboxProps extends Omit<ComponentPropsWithoutRef<"div">, "content"> {
  content?: React.ReactNode;
  value?: any;
  size?: "xs" | "sm" | "md" | "lg";
  intermediate?: boolean;
  checked?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled?: boolean;
  error?: boolean;
}

export interface IOptionDropdownTreeItemProps {
  checkIntermediate?: (value: IOptionDropdownTreeInput) => boolean;
  active?: boolean;
  content: IOptionDropdownTreeInput;
  selectedOption: IOptionDropdownTreeInput[];
  activeParentList: IOptionDropdownTreeInput[];
  setActiveParentList: React.Dispatch<React.SetStateAction<IOptionDropdownTreeInput[]>>;
  onChange?: (value: IOptionDropdownTreeInput) => void;
  onOpen?: () => void;
}

export interface IDropdownInputProps
  extends Omit<ComponentPropsWithoutRef<"button">, "onChange" | "value" | "placeholder" | "defaultValue"> {
  placeholder: string;
  dataOption: IOptionDropdownTreeInput[];
  onChange?: (value: IOptionDropdownTreeInput[], title?: string) => void;
  onChangeSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClean?: boolean;
  value?: IOptionDropdownTreeInput[];
  isSelectAll?: boolean;
  isClean?: boolean;
  onSort?: (isSorted: boolean) => void;
  typeShowOptionSelectedTitle?: "summary" | "listed";
  defaultValue?: IOptionDropdownTreeInput[];
}

export interface IDropdownTreeFormInputProps
  extends Omit<ComponentPropsWithoutRef<"button">, "onChange" | "value" | "placeholder"> {
  placeholder: string;
  name: string;
  dataOption: IOptionDropdownTreeInput[];
  onChange?: (value: IOptionDropdownTreeInput[], title?: string) => void;
  onChangeSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  onClean?: boolean;
  value?: IOptionDropdownTreeItemProps;
  isSelectAll?: boolean;
  isClean?: boolean;
  onSort?: (isSorted: boolean) => void;
}

export interface IOptionDropdownTreeInput {
  id: string;
  parentId?: string;
  level: number;
  title: string;
  value: any;
  children?: IOptionDropdownTreeInput[];
}

export interface IOptionDropdownSelectDataProps extends IOptionDropdownTreeInput {
  subTitle?: string;
  handleAction?: () => void;
}

export interface IOptionDropdownSelect extends IOptionDropdownTreeInput {
  subTitle?: string;
}

export interface ISelectOptionProps extends Omit<IDropdownInputProps, "dataOption" | "defaultValue"> {
  width?: string;
  readonly?: boolean;
  handleOnClick?: () => void;
  dataOption: IOptionDropdownSelectDataProps[];
  isFullHeight?: boolean;
}

export interface IPositionStyleSelect {
  top?: string | number;
  left?: string | number;
  right?: string | number;
  bottom?: string | number;
}

export interface IRadioBoxProps {
  content?: React.ReactNode;
  size?: "xs" | "md" | "lg" | "default";
  value?: string | number;
  onChange?: () => void;
  checked?: boolean;
  disabled?: boolean;
  error?: boolean;
  [key: string]: any; // Allows for additional props
}
export interface IDropdownItem {
  navLevel?: "parent" | "child";
  size: "default" | "small";
  title: string;
  secondaryText?: string;
  check?: boolean;
  leadIcon?: React.ReactNode;
  tailIcon?: React.ReactNode;
  checkbox?: boolean;
  value: any;
  onClick?: (value: any) => void;
}

export interface IOptionSingleChoiceDropdownInput {
  value: string;
  title: string;
  subTitle?: string;
  dropdownItemProps?: Omit<IDropdownItem, "title" | "check" | "secondaryText" | "value">;
  renderDropdownItem?: (isSelected: boolean, optionSelected: string | undefined) => React.ReactNode;
}

export interface IOptionSingleChoiceDropdownInputProps extends IOptionSingleChoiceDropdownInput {
  handleOnClickItem: () => void;
}

export interface IExtendDropdownFrame {
  renderExtendFrame?: (props: { optionSelected?: string; textSearch?: string | null }) => React.ReactNode;
  position: "top" | "bottom";
}

export interface ISingleChoiceDropdownInputProps
  extends Omit<ComponentPropsWithoutRef<"button">, "onChange" | "value" | "defaultValue"> {
  title?: string;
  options: IOptionSingleChoiceDropdownInput[];
  onChange?: (value: string) => void;
  size?: "default" | "small";
  value?: string;
  subTitle?: string;
  dropdownItemProps?: Omit<IDropdownItem, "title" | "check" | "secondaryText" | "value" | "onClick">;
  placeholder?: string;
  onChangeSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  defaultValue?: string;
  extendFrame?: IExtendDropdownFrame[];
  renderGeneralDropdownItem?: (params: {
    option: IOptionSingleChoiceDropdownInput;
    handleClickOption: (value: string) => void;
  }) => React.ReactNode;
  referenceChildren?: Array<React.RefObject<HTMLDivElement>>;
  isViewMode?: boolean;
}

export interface ISingleChoiceDropdownFormInputProps extends ISingleChoiceDropdownInputProps {
  name: string;
}

export interface IBulkActionDropdownInputProps extends Omit<ISingleChoiceDropdownInputProps, "placeholder"> {
  renderTitleValueDropdown?: () => React.ReactNode;
}

export interface IDropdownTableInputProps<IRecordType = any>
  extends Omit<ComponentPropsWithoutRef<"button">, "onChange" | "value" | "placeholder"> {
  placeholder: string;
  tableProps: Omit<ITable<IRecordType>, "onRowClick">;
  onChange: (value: any) => void;
  onChangeSearch?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  renderSelectedValue: (value: IRecordType) => React.ReactNode;
  onTextChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  size: "small" | "medium";
  placeholderTextSearch?: string;
}

export interface IMarkdownInputProps {
  name: string;
  initialValue?: string;
  onChange?: (value: string) => void;
  placeholder?: string;
  title?: string;
  isViewMode?: boolean;
}
