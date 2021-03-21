import React, { useEffect } from 'react';
import { Text, Image, ActivityIndicator, Modal } from 'react-native';
import api from '../../services/api';
import Container, { ConfirmRemoverBtn, ContainerData, ContainerImg, ContainerLoading, RemoveBtn, StyledImage, StyledText, StyledTextRemove } from './styles';
import { IGitUserProps, Props, IReposProps } from './types';
import Icon from 'react-native-vector-icons/FontAwesome';
import Button from '../../components/Button';
import { ScrollView } from 'react-native-gesture-handler';
import { ContainerModal, ContainerModalContent, StyledTextTitle } from '../Usuarios/styles';

const Repositorios: React.FC<Props> = (props: Props): JSX.Element => {
    const { route, navigation } = props;
    const { user } = route.params

    const [gitUser, setGitUser] = React.useState<IGitUserProps>();
    const [loading, setLoading] = React.useState<boolean>(true);
    const [modal, setModal] = React.useState<boolean>(false);

    function hadleNavigateToUsuariosPage() {
        navigation.navigate("Usuarios", {
            delete: user,
        });
    }

    function hadleNavigateToRepositorioN(repo: IReposProps) {
        if (gitUser)
            navigation.navigate("Repositorio", {
                username: gitUser.userName,
                img: gitUser.img || 'Sem Imagem',
                description: repo.description || 'Sem descrição',
                language: repo.language,
                name: repo.name,
                html_url: repo.html_url,
            });
    }

    useEffect(() => {
        const getRepositorio = async () => {
            try {
                const response = await api.get(`users/${user}`);
                if (response.status === 200) {
                    const { avatar_url, } = response.data
                    const newRepos: IReposProps[] = [];

                    const responseRepo = await api.get(`users/${user}/repos`);
                    if (responseRepo.status === 200) {
                        responseRepo.data.map((data: IReposProps) => {
                            const newRepo: IReposProps = {
                                name: data.name,
                                language: data.language,
                                description: data.description,
                                html_url: data.html_url,
                            }
                            newRepos.push(newRepo);
                        });
                    }
                    const newGitUser = {
                        img: avatar_url,
                        userName: user,
                        repos: newRepos,
                    }
                    setGitUser(newGitUser);
                }
            } catch (e) {
                console.log(e)
            }
            setLoading(false);
        }

        getRepositorio();
    }, []);

    const renderRepositorios = () => {
        return gitUser?.repos?.map(repo => (
            <Button
                key={repo.name}
                title={repo.name}
                onPress={() => { hadleNavigateToRepositorioN(repo) }}
            />
        ))
    }

    const renderLoading = () => (
        <ContainerLoading>
            <ActivityIndicator size="large" color="#5EB1BF" />
        </ContainerLoading>
    )

    const renderModal = () => (
        <Modal
            animationType="fade"
            transparent={true}
            visible={modal}
            onRequestClose={() => {
                setModal(false)
            }}
        >
            <ContainerModal>
                <ContainerModalContent>
                    <StyledTextTitle>Tem certeza ?</StyledTextTitle>
                    <Text>
                        <Text>
                            Tem certeza que deseja remover o suário
                        </Text>
                        <Text style={{ fontWeight: "bold" }}>
                            {' '}{user}
                        </Text>
                        <Text>
                            ?
                        </Text>
                    </Text>

                    <ConfirmRemoverBtn onPress={hadleNavigateToUsuariosPage}>
                        <StyledTextRemove>
                            <Icon name="trash-o" size={20} color="#fff" /> Remover
                        </StyledTextRemove>
                    </ConfirmRemoverBtn>
                </ContainerModalContent>
            </ContainerModal>
        </Modal>
    )

    const renderRepositories = () => (
        <Container>
            {renderModal()}
            <ScrollView>
                <ContainerData>
                    <ContainerImg>
                        {
                            gitUser?.img ?
                                <StyledImage source={{ uri: gitUser?.img }} />
                                : (
                                    <Text>
                                        Sem Imagem
                                    </Text>
                                )
                        }
                    </ContainerImg>
                    <StyledText>
                        {gitUser?.userName || 'Usuário não encontrado'}
                    </StyledText>

                    {renderRepositorios()}
                </ContainerData>
            </ScrollView>


            <RemoveBtn onPress={() => { setModal(true) }}>
                <StyledTextRemove>
                    <Icon name="trash-o" size={20} color="#fff" /> Remover usuário
                </StyledTextRemove>
            </RemoveBtn>

        </Container>
    );

    return loading ? renderLoading() : renderRepositories();
}

export default Repositorios;