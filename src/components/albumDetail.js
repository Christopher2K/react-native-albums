import React from  'react';
import { Text, View, Image, Linking } from 'react-native';
import Card from './card';
import CardSection from './cardSection';
import Button from './button';

const AlbumDetail = ({ album }) => {
    const { title, artist, thumbnail_image, image, url } = album;
    return (
        <Card>
            <CardSection>
                <View style={styles.thumbnailContainer}>
                    <Image
                        style={styles.thumbnailImage}
                        source={{ uri: thumbnail_image }}
                    />
                </View>
                <View style={styles.informationsContainer}>
                    <Text style={styles.informationTextContainer}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>
            <CardSection>
                <View style={styles.imageContainer} >
                    <Image style={styles.image} source={{ uri:image }}/>
                </View>
            </CardSection>
            <CardSection>
                <Button label="View album" onPress={() => Linking.openURL(url)} />
            </CardSection>
        </Card>);
};

const styles = {
    informationsContainer: {
        justifyContent: 'space-around'
    },

    informationTextContainer: {
        fontSize: 16,
        fontWeight: '600'
    },

    thumbnailContainer: {
        marginRight: 10,
        justifyContent: 'center',
        alignItems: 'center'
    },

    thumbnailImage: {
        width: 50,
        height: 50
    },

    imageContainer: {
        flex: 1
    },

    image: {
        width: null,
        height: 300,
    }
};

export default AlbumDetail;