import { Picker } from '@react-native-picker/picker';
import React, { useState } from 'react';
import { FlatList, View, StyleSheet, TouchableOpacity } from 'react-native';
import { Searchbar } from 'react-native-paper';
import { useHistory } from 'react-router';
import useRepositories from '../hooks/useRepositories';
import RepositoryItem from './RepositoryItem';

const styles = StyleSheet.create({
  separator: {
    height: 10,
  },
});


const ItemSeparator = () => <View style={styles.separator} />;

export const RepositoryListContainer = ({ repositories, testID, selected, setSelected, refetch, onChangeSearch, searchQuery, onEndReach }) => {
  // Get the nodes from the edges array
  const repositoryNodes = repositories ? repositories.edges.map(edge => edge.node) : [];
  const history = useHistory();
  const handlePush = id => {
    history.push(`/repository/${id}`);
  };

  return (
    <FlatList
      data={repositoryNodes}
      ItemSeparatorComponent={ItemSeparator}
      renderItem={({ item }) => <TouchableOpacity onPress={() => handlePush(item.id)}><RepositoryItem item={item} /></TouchableOpacity>}
      keyExtractor={item => item.id}
      ListHeaderComponentStyle={{ marginVertical: 20 }}
      ListHeaderComponent={
        <>
          <Searchbar
            placeholder="Search"
            onChangeText={onChangeSearch}
            value={searchQuery}
            style={{ marginVertical: 10, marginHorizontal: 10 }} />
          <Picker
            selectedValue={selected}
            onValueChange={(itemValue) => (
              setSelected(itemValue), refetch({ orderBy: itemValue }))
            }
            style={{ marginBottom: 10, marginHorizontal: 10 }}>
            <Picker.Item label="Select an item..." value="latest" />
            <Picker.Item label="Latest repositories" value="CREATED_AT" />
            <Picker.Item label="Highest rated repositories" value="RATING_AVERAGE" />
            <Picker.Item label="Lowest rated repositories" value="lowest" />
          </Picker>
        </>
      }
      testID={testID}
      onEndReached={onEndReach}
      onEndReachedThreshold={0.5}
    />
  );
};

const RepositoryList = () => {
  const [selectedOrder, setSelectedOrder] = useState('RATING_AVERAGE');
  const { repositories, refetch, fetchMore } = useRepositories({
    first:8,
  });
  const [searchQuery, setSearchQuery] = useState('');


  const onChangeSearch = query => {
    setSearchQuery(query);
    refetch({ searchKeyword: query });
  };

  const onEndReach = () => {
    fetchMore();
  };
  return (
    <RepositoryListContainer
      repositories={repositories}
      selected={selectedOrder}
      setSelected={setSelectedOrder}
      refetch={refetch}
      onChangeSearch={onChangeSearch}
      searchQuery={searchQuery}
      onEndReach={onEndReach}
    />
  );
};

export default RepositoryList;