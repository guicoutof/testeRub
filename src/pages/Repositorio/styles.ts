import styled from 'styled-components/native';

const Container = styled.View({
    display: 'flex',
    flex: 1,
    flexDirection: 'column',
    width: '100%',
    justifyContent: 'space-between',
});

export const ContainerLoading = styled.View({
    display: 'flex',
    flex: 1,
    width: '100%',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center',
})

export const ContainerData = styled.View({
    padding: 16,
    width: '100%',
    alignItems: 'center',
});

export const ContainerImg = styled.View({
    width: 150,
    height: 150,
    backgroundColor: '#C4C4C4',
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 8,
});

export const StyledImage = styled.Image({
    width: "100%",
    height: '100%',
    borderRadius: 4,
});

export const StyledText = styled.Text({
    fontSize: 18,
    textAlign: 'center',
    fontWeight: 700,
    color: '#042A2B',
});

export const ContainerDesc = styled.View({
    marginTop: 24,
    width: '100%',
    display: 'flex',
    alignItems: 'flex-start',
    flexDirection: 'column',
});

export const StyledTextUser = styled.Text({
    paddingTop: 8,
    paddingBottom: 24,
    fontSize: 18,
    textAlign: 'center',
})

export const AcessarBtn = styled.TouchableOpacity({
    backgroundColor: '#042A2B',
    width: '90%',
    height: 48,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
});

export const StyledTextAcessar = styled.Text({
    color: '#fff',
    fontSize: 18,
})


export default Container;