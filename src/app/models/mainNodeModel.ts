export interface MainNodeModel {
    title: string,
    linkingFields: {
        id?: string
        label: string
    }[],
    dataFields: {
        id?: string
        label: string
    }[]
}