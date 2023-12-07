'use client'

import {Box} from "@mui/material";
import {useEffect, useState} from "react";
import {getAllCollections} from "../../../lib/api/api";
import {Collection} from "../../../types/Collection";
import CollectionCard from "../../common/ui/collection-card/CollectionCard";

import * as styles from './CollectionsPage.styles';

const CollectionsPage = () => {
  const [collections, setCollections] = useState<Collection[]>(null);
  useEffect(() => {
    const fetchData = async () => {
      const result = await getAllCollections(1, 15)
      setCollections(result);
      console.log(collections)
    };

    fetchData();
  }, []);

  return (
    <Box sx={styles.collectionsContainer}>
      {collections && collections.map((collection, index) => (
        <CollectionCard key={index} collection={collection} sx={styles.collectionCard}/>
      ))}
    </Box>
  );
}

export default CollectionsPage
