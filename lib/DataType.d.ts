export declare type DataItemType<DataType> = DataType extends any[] ? DataType[number] | Partial<DataType[number]> : DataType | Partial<DataType>;
export declare type DataOrSetType<DataType> = DataType | DataType[];
export declare type DataSetType<DataType, DataItem = DataItemType<DataType>> = DataItem[];
