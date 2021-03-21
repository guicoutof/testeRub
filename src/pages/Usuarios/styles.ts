import styled from 'styled-components/native';

const Container = styled.View({
    display: 'flex',
    flex: 1,
    width: '100%',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingBottom: 8,
});

export const ContainerModal = styled.View({
    width: '100%',
    height: '100%',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    position: 'absolute',
    alignItems: 'center',
    justifyContent: 'center',
})

export const ContainerData = styled.ScrollView({
    padding: 24,
    width: '100%',
    marginBottom: 8,
})

export const ContainerModalContent = styled.View({
    height: 200,
    backgroundColor: '#fff',
    width: '90%',
    borderRadius: 4,
    paddingTop: 16,
    paddingBottom: 16,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'center',
})

export const StyledTextTitle = styled.Text({
    fontWeight: 700,
    color: '#042A2B',
    fontSize: 18,
})

export const BtnAdd = styled.TouchableOpacity({
    marginTop: 'auto',
    backgroundColor: "#042A2B",
    width: 60,
    height: 60,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
});

export const StyledInput = styled.TextInput({
    width: '80%',
    borderBottomWidth: 1,
    borderStyle: 'solid',
    borderColor: 'black',
    alignItems: 'center',
    padding: 0,
    textAlign: 'center',
})

export const SaveBtn = styled.TouchableOpacity({
    backgroundColor: "#042A2B",
    width: '80%',
    height: 48,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4,
});

export const TextAdd = styled.Text({
    color: '#fff',
    fontSize: 24,
})

export const SaveText = styled.Text({
    color: '#fff',
    fontSize: 18,
})

export default Container;