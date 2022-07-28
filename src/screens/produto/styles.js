import { styled } from "stitches-native";


import { Dimensions } from "react-native";


const width = Dimensions.get('screen').width;


export const Container = styled("SafeAreaView", {
    backgroundColor: "white",
  });
  export const SubContainer = styled("View", {
    backgroundColor: "white",
    paddingVertical: 8,
    paddingHorizontal: 16,
  });


  export const Title = styled("Text", {
    position: 'absolute',
    width: '100%',
    textAlign: 'center',
    fontSize: 16,
    color: 'white',
    padding: 16,
  });

  export const ImgTopo = styled ("Image", {
    width: '100%',
    height: 578/ 768 * width,

  })


  export const SubTitle = styled ("Text" ,{
    color: '#464646',
    fontSize: 26,
    lineHeight: 42,
    fontFamily: 'MontserratBold'
  })

  export const ContainerProducer = styled("View" , {
    flexDirection: 'row',
    paddingVertical: 12,
  })

  export const ImgProducer = styled ("Image", {
    width: 32,
    height: 32

  })

  export const TitleProducer = styled ("Text", {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 12,
    fontFamily: 'MontserratRegular'
  })

  export const DescriptionP = styled ("Text", {
    color: '#A3A3A3',
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'MontserratRegular'
  })

  export const Price = styled ("Text", {
    color: '#2A9F85',
    fontSize: 26,
    lineHeight: 42,
    marginTop: 8,
    fontFamily: 'MontserratBold'
  })

  export const Button = styled ("TouchableOpacity", {
    marginTop: 16,
    backgroundColor: '#2A9F85',
    paddingVertical: 16,
    borderRadius: 6,

  })

  export const ButtonText = styled ("Text" ,{
    textAlign: 'center',
    color: '#ffffff',
    fontSize: 16,
    lineHeight: 26,
    fontFamily: 'MontserratBold'
  })

  export const TitleProducts = styled ("Text", {
    color: '#464646',
    fontFamily: 'MontserratBold',
    marginTop: 32,
    marginBottom: 8,
    fontSize: 20,
    lineHeight: 32,
    marginLeft: 16,
  })

  export const ContainerProducts = styled("View" , {
    flexDirection: 'row',
    paddingVertical: 16,
    borderBottomColor: '#ECECEC',
    borderBottomWidth: 1,
    alignItems: 'center',
    paddingHorizontal: 16,
  })

  export const ProductsText = styled("Text", {
    fontSize: 16,
    lineHeight: 26,
    marginLeft: 11,
    color: '#464646',
    fontFamily: 'MontserratRegular'
  })