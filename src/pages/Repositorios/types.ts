import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../../routes';

export type Props = StackScreenProps<RootStackParamList, 'Repositorios'>;

export interface IGitUserProps {
    img?: string,
    userName: string,
    repos?: IReposProps[],
}

export interface IReposProps {
    language: string,
    name: string,
    description?: string,
    html_url: string,
}
