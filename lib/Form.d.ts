import React from "react";
import * as Yup from "yup";
import { UsesFormContext, ValidationErrors, FormContextUtilities } from "./FormContext";
import { DataItemType } from "./DataType";
export interface ComponentProps<OriginalData, DataItem = DataItemType<OriginalData>> {
    form?: Form<OriginalData>;
    index?: number;
    validationErrors?: ValidationErrors<OriginalData>;
    identityProperties?: (keyof DataItem)[];
    immutable?: boolean | ((data: DataItem) => boolean);
    useFormTag?: boolean;
    name?: string;
    method?: string;
    action?: string;
    onSubmit?(data: OriginalData): any;
    onChange?(editedData: DataItem, dataBeforeEdit?: DataItem): any;
    onInvalid?(errors: ValidationErrors<OriginalData>): any;
}
declare type Props<OriginalData> = ComponentProps<OriginalData> & UsesFormContext<OriginalData>;
declare type GetOriginalData<T> = T extends Props<infer P> ? P : never;
interface State<PropsType extends Props<any>, OriginalData = GetOriginalData<PropsType>, DataItem extends DataItemType<OriginalData> = DataItemType<OriginalData>> {
    collectionSchema: Yup.ArraySchema<DataItemType<OriginalData>>;
    sourceData: OriginalData;
    editedData: DataItem[];
    dataGeneration: {
        [key: number]: number;
    };
    validationErrors: ValidationErrors<OriginalData>;
}
export declare class Form<OriginalData, PropsType extends Props<OriginalData> = Props<OriginalData>, StateType extends State<PropsType> = State<PropsType>, DataItem = DataItemType<OriginalData>> extends React.PureComponent<PropsType, StateType> implements FormContextUtilities<DataItem> {
    readonly state: StateType;
    static defaultProps: ComponentProps<any>;
    static getDerivedStateFromProps(props: Props<any>, state: State<Props<any>>): {
        collectionSchema: Yup.ArraySchema<any>;
        sourceData: any;
        editedData: any[];
        dataGeneration: {};
        validationErrors: ValidationErrors<any, any, string>;
    };
    private static defaultStructure;
    private static castData;
    private static castSchema;
    private static defaultValidationErrors;
    render(): {};
    private renderWithFormTag;
    private renderWithoutFormTag;
    private renderData;
    add(datum: DataItem): Promise<void>;
    setFieldValue(index: number, name: keyof DataItem, value?: DataItem[typeof name] | undefined): Promise<void>;
    submit(): Promise<void>;
    private validate;
    private setValidationError;
    private clearValidationError;
    clearValidationErrors(): Promise<void>;
    private changed;
    private checkForm;
    private indexErrors;
    private checkImmutable;
    private calculateIdentity;
    private setStateAsync;
}
export {};
