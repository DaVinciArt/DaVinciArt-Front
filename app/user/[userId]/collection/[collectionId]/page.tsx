import CollectionPage from "../../../../../components/pages/collection-page/CollectionPage";
interface CollectionPageParams {
  params: {
    userId: number,
    collectionId: number
  }
}

const Collection = ({params: {userId, collectionId}}: CollectionPageParams) => {

  return (
    <CollectionPage userId={userId} collectionId={collectionId}/>
  );
}
export default Collection;
