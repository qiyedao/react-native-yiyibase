import { Method } from "axios";
import React from "react";
import { Animated, ListRenderItem, ViewProps } from "react-native";
export interface NBCompFlatListProps<T> extends ViewProps {
    api?: string;
    params?: any;
    method?: Method;
    pageNoField?: string;
    pageSizeField?: string;
    pageSize?: number;
    data?: ReadonlyArray<T> | null | undefined;
    renderItem: ListRenderItem<T> | null | undefined;
    ListHeaderComponent?: React.ComponentType<any> | React.ReactElement | null;
    horizontal?: boolean | null;
    autoRefresh?: boolean;
    refreshTextBackgroundColor?: string;
    onEndReachedThreshold?: number;
}
export declare class NBCompFlatList<T = any> extends React.Component<NBCompFlatListProps<T>, {
    data: Array<T>;
    hasMore?: boolean;
    refreshing?: boolean;
    fetchError?: any;
}> {
    private flatList?;
    private total?;
    private fetchParams;
    private page?;
    private size?;
    _rheight: Animated.Value;
    _bHeight: Animated.Value;
    constructor(props: NBCompFlatListProps<T>);
    componentDidMount(): void;
    fetchData(fetchParams?: any, page?: number, size?: number): Promise<unknown>;
    UNSAFE_componentWillReceiveProps(props: NBCompFlatListProps<T>): void;
    appendData(d: Array<T>, refresh?: boolean): Promise<boolean>;
    scrollToEnd(params?: {
        animated?: boolean | null;
    }): void;
    private onRefreshStart;
    private onRefreshFinish;
    render(): JSX.Element;
}
