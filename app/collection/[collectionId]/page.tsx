import CollectionPage from "../../../components/pages/collection-page/CollectionPage";
interface CollectionPageParams {
  params: {
    collectionId: number
  }
}

const Collection = ({params: {collectionId}}: CollectionPageParams) => {

  return (
    <CollectionPage collectionId={collectionId}/>
  );
}
export default Collection;
