import React, { Component } from 'react';
import axios from 'axios';
import { ScrollView } from 'react-native';
import AlbumDetail from './albumDetail';

const mockAlbums = [
    {
        artist: 'Taylor Swift',
        image:
            'https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg',
        thumbnail_image: 'https://i.imgur.com/K3KJ3w4h.jpg',
        title: 'Tawift',
        url: 'https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6'
    },
    {
        artist: 'Taylor Swift',
        image:
            'https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg',
        thumbnail_image: 'https://i.imgur.com/K3KJ3w4h.jpg',
        title: 'Taylowift',
        url: 'https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6'
    },
    {
        artist: 'Taylor Swift',
        image:
            'https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg',
        thumbnail_image: 'https://i.imgur.com/K3KJ3w4h.jpg',
        title: 'TaylorSwift',
        url: 'https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6'
    },
    {
        artist: 'Taylor Swift',
        image:
            'https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg',
        thumbnail_image: 'https://i.imgur.com/K3KJ3w4h.jpg',
        title: 'Taylor Swit',
        url: 'https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6'
    },
    {
        artist: 'Taylor Swift',
        image:
            'https://images-na.ssl-images-amazon.com/images/I/61McsadO1OL.jpg',
        thumbnail_image: 'https://i.imgur.com/K3KJ3w4h.jpg',
        title: 'Tayl Swift',
        url: 'https://www.amazon.com/Taylor-Swift/dp/B0014I4KH6'
    }
];

class AlbumList extends Component {
    state = { albums: [] };

    constructor() {
        super();
    }

    componentWillMount() {
        axios
            .get('https://rallycoding.herokuapp.com/api/music_albums')
            .then((response) => {
                this.setState({ albums: response.data });
            })
            .catch(() => {
                this.setState({
                    albums: mockAlbums
                });
            });
    }

    render() {
        const { albums } = this.state;
        return (
            <ScrollView>
                {albums.map((album) =>
                    <AlbumDetail key={album.title} album={album} />
                )}
            </ScrollView>
        );
    }
}

export default AlbumList;
