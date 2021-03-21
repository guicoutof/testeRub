import React from 'react';
import { Text, Linking } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';
import Container, { AcessarBtn, ContainerData, ContainerDesc, ContainerImg, StyledImage, StyledText, StyledTextAcessar, StyledTextUser } from './styles';
import { IRepositorioProps } from './types';

const Repositorio: React.FC<IRepositorioProps> = (props: IRepositorioProps) => {
    const { description, username, img, language, html_url } = props.route.params;

    return (
        <Container>
            <ContainerData>
                <ContainerImg>
                    {
                        img ?
                            <StyledImage source={{ uri: img }} />
                            : (
                                <Text>
                                    Sem Imagem
                                </Text>
                            )
                    }
                </ContainerImg>
                <StyledTextUser>
                    {username}
                </StyledTextUser>
                <ContainerDesc>
                    <StyledText>
                        Descrição
                    </StyledText>
                    <Text>
                        {description}
                    </Text>
                    <StyledText>
                        Linguagem
                    </StyledText>
                    <Text>
                        {language}
                    </Text>
                </ContainerDesc>
            </ContainerData>



            <AcessarBtn onPress={() => { Linking.openURL(html_url) }}>
                <StyledTextAcessar>
                    <Icon name="arrow-redo" size={20} color="#fff" /> Acessar
            </StyledTextAcessar>
            </AcessarBtn>

        </Container>
    )
}

export default Repositorio;