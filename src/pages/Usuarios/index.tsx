import React, { useEffect } from 'react';
import { Modal, ScrollView, Text } from 'react-native';
import Container, { BtnAdd, ContainerData, ContainerModal, ContainerModalContent, SaveBtn, SaveText, StyledInput, StyledTextTitle, TextAdd } from './styles';
import Button from '../../components/Button'
import { Props } from './types';
import Icon from 'react-native-vector-icons/FontAwesome5';

const Usuarios: React.FC<Props> = (props: Props): JSX.Element => {
    const { route, navigation } = props;

    const [users, setUsers] = React.useState<string[]>();
    const [modal, setModal] = React.useState(false);
    const [user, setUser] = React.useState('');

    function hadleNavigateToRepositoriosPage(user: string) {
        navigation.navigate("Repositorios", {
            user,
        });
    }

    const handleAddUser = () => {
        const newUsers = users || [];
        newUsers.push(user);
        setUsers(newUsers);
        setUser('');
        setModal(false);
    }

    const handleRemoveUser = () => {
        const newUsers = users?.filter(user => user != route.params.delete)
        if (newUsers) setUsers([...newUsers]);
    }

    const renderBtns = () => {
        return users?.map((user, index) => (
            <Button key={index} title={user} onPress={() => hadleNavigateToRepositoriosPage(user)} />
        ))
    }
    useEffect(() => {
        handleRemoveUser();
    }, [route.params.delete])

    useEffect(() => {
        renderBtns();
    }, [users])

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
                    <StyledTextTitle>Novo usuário</StyledTextTitle>
                    <StyledInput
                        onChangeText={(text) => setUser(text)}
                        value={user}
                        placeholder="Usuário"
                    />
                    <SaveBtn onPress={handleAddUser}>
                        <SaveText >
                            Salvar
                        </SaveText>
                    </SaveBtn>
                </ContainerModalContent>
            </ContainerModal>
        </Modal>
    )

    return (
        <Container>
            {renderModal()}
            <ContainerData>
                {renderBtns()}
            </ContainerData>

            <BtnAdd onPress={() => { setModal(true); }}>
                <Icon name="plus" size={24} color="#fff" />
            </BtnAdd>

        </Container>
    )
};

export default Usuarios;