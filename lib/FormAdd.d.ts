import React from "react";
import { UsesFormContext } from "./FormContext";
interface ComponentProps<DataType> {
    field: string;
    default?: DataType | (() => DataType);
}
declare type Props<DataType> = ComponentProps<DataType> & UsesFormContext<DataType>;
export declare const FormAdd: React.ComponentType<Pick<Props<any>, "field" | "default">>;
export {};
