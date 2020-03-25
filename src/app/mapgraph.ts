/** Typing info that is essentially 1-to-1 with the API for the mapper service */

export interface MappingGraph {
    directed: Boolean
    nodes: Array<GraphNode>
    edges: Array<GraphEdge>
}

export interface GraphNode {
    id: string
    metadata: GraphNodeMeta
}

export interface GraphNodeMeta {
    fieldName: string
    tableName: string  // Essentially the parent node of the field being mapped
    objectKey?: string
    /** nodeType (feel free to implement an Enum class for this): 
     *     - 0 for a map type (data source could be an external service like schedule or another file upload) (formally - any 'constraint node')
     *     - 1 for a progress item node, or (formally - any 'population node')
     *     - 2 for a file upload node (formally - any 'upload node')
     */
    nodeType: number
    objectType?: number // Either 1 for a graphql source or 2 for a file upload source
}

export interface GraphEdge {
    source: string
    target: string
    directed: Boolean
    metadata: GraphEdgeMeta
}

export interface GraphEdgeMeta {
    edgeType: number // Either 0 for a linking edge or 1 for a copy edge
}


