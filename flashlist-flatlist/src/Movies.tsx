import React, {useRef} from 'react';
import {FlatList, Image, StyleSheet, Text, View} from 'react-native';
import {FlashList} from '@shopify/flash-list';
import {IMAGE_SIZE, Movie, Playlist, getImageUrl} from './api';
import {playlists as playlistData} from './api/data/playlist';
import {useRememberListScroll} from './useRememberListScroll';

const cardStyles = StyleSheet.create({
  image: {
    width: IMAGE_SIZE.width,
    height: IMAGE_SIZE.height,
    borderRadius: 5,
  },
});

const MoviePortrait = ({movie}: {movie: Movie}) => {
  return (
    <Image
      source={{uri: getImageUrl(movie.poster_path)}}
      style={cardStyles.image}
    />
  );
};

const MarginBetweenItems = () => <View style={{width: margins.s}} />;

const margins = {
  s: 5,
  m: 10,
  l: 20,
};

const rowStyles = StyleSheet.create({
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'white',
    marginHorizontal: margins.m,
    marginBottom: margins.s,
  },
  container: {
    minHeight: cardStyles.image.height,
    marginBottom: margins.l,
  },
  listContainer: {
    paddingHorizontal: margins.m,
  },
});

const useFlashList = true;

const MovieRow = ({playlist}: {playlist: Playlist}) => {
  const movies = playlistData[playlist.id]();
  const listRef = useRef<FlashList<Movie>>(null);

  const {onMomentumScrollBegin, onScroll} = useRememberListScroll(
    listRef,
    playlist.id,
  );

  return (
    <>
      <Text numberOfLines={1} style={rowStyles.title}>
        {playlist.title}
      </Text>
      <View style={rowStyles.container}>
        {useFlashList ? (
          <FlashList
            contentContainerStyle={rowStyles.listContainer}
            // See https://shopify.github.io/flash-list/docs/fundamentals/performant-components/#remove-key-prop
            keyExtractor={(movie: Movie, index: number) => index.toString()}
            ItemSeparatorComponent={MarginBetweenItems}
            horizontal
            estimatedItemSize={cardStyles.image.width}
            data={movies}
            renderItem={({item}: {item: Movie}) => (
              <MoviePortrait movie={item} />
            )}
            ref={listRef}
            onMomentumScrollBegin={onMomentumScrollBegin}
            onScroll={onScroll}
          />
        ) : (
          <FlatList
            contentContainerStyle={rowStyles.listContainer}
            keyExtractor={(movie: Movie) => movie.id.toString()}
            ItemSeparatorComponent={MarginBetweenItems}
            horizontal
            data={movies}
            renderItem={({item}: {item: Movie}) => (
              <MoviePortrait movie={item} />
            )}
          />
        )}
      </View>
    </>
  );
};

const listStyles = StyleSheet.create({
  container: {
    backgroundColor: 'black',
    paddingVertical: margins.m,
  },
});

const App = () => {
  const playlists = require('./api/data/rows.json');

  return useFlashList ? (
    <FlashList
      data={playlists}
      keyExtractor={(playlist: Playlist) => playlist.id}
      estimatedItemSize={cardStyles.image.height + 25}
      renderItem={({item: playlist}: {item: Playlist}) => (
        <MovieRow playlist={playlist} />
      )}
      contentContainerStyle={listStyles.container}
    />
  ) : (
    <FlatList
      data={playlists}
      keyExtractor={(playlist: Playlist) => playlist.id}
      renderItem={({item: playlist}: {item: Playlist}) => (
        <MovieRow playlist={playlist} />
      )}
      contentContainerStyle={listStyles.container}
    />
  );
};

export default App;
