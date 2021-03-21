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


export const ConfirmRemoverBtn = styled.TouchableOpacity({
    backgroundColor: "#042A2B",
    width: '80%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
});

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
});

export const StyledImage = styled.Image({
    width: "100%",
    height: '100%',
    borderRadius: 4,
});

export const StyledText = styled.Text({
    paddingTop: 8,
    paddingBottom: 24,
    fontSize: 18,
    textAlign: 'center',
});

export const RemoveBtn = styled.TouchableOpacity({
    backgroundColor: '#CA4141',
    width: '90%',
    height: 48,
    borderRadius: 4,
    alignItems: 'center',
    justifyContent: 'center',
    margin: 16,
});

export const ContainerTextModal = styled.Text({
    textAlign: 'center',
    width: '64%',
})

export const StyledTextRemove = styled.Text({
    color: '#fff',
    fontSize: 18,
})


export default Container;