import * as Yup from "yup";
import React from "react";
import { DataItemType } from "./DataType";
import { Omit } from "@artmoi/artmoi-js";
export declare type ValidationErrors<OriginalData, DataItem extends DataItemType<OriginalData> = DataItemType<OriginalData>, DataItemKey extends keyof DataItem = Extract<keyof DataItem, string>> = {
    [name in DataItemKey]?: Yup.ValidationError;
};
export interface FormContextUtilities<DataItem> {
    submit(): Promise<void>;
    add(datum: DataItem): Promise<void>;
    setFieldValue(index: number, name: keyof DataItem, value?: DataItem[typeof name] | undefined): Promise<void>;
}
export interface FormContext<DataType> {
    data: DataType;
    form: FormContextUtilities<DataType>;
    index: number;
    immutable: boolean;
    schema?: Yup.Schema<DataItemType<DataType>>;
    validationErrors: ValidationErrors<DataType>;
}
export declare type UsesFormContext<DataType> = FormContext<DataType>;
export declare const FormProvider: React.ProviderExoticComponent<React.ProviderProps<FormContext<any>>>;
export declare const FormConsumer: React.ExoticComponent<React.ConsumerProps<FormContext<any>>>;
export declare type GetProps<C> = C extends React.ComponentType<infer P> ? P : never;
export declare type GetDataType<C> = C extends FormContext<infer T> ? T : never;
export declare function withForm<DataType = any, WidgetType extends React.ComponentType<UsesFormContext<DataType> & any> = React.ComponentType<UsesFormContext<DataType> & any>, WidgetProps extends GetProps<WidgetType> = GetProps<WidgetType>>(FormComponent: WidgetType): React.ComponentType<Omit<WidgetProps, keyof UsesFormContext<DataType>>>;
