export interface INode {
  id: string;
  parentId?: string;
  level: number;
  title: string;
  value: any;
  children?: INode[];
}
