const conf = {
    appwriteUrl: String(import.meta.env.VITE_APPWRITE_URL),
    appwriteProjectId: String(import.meta.env.VITE__PROJECT_ID),
    appwriteDatabaseId: String(import.meta.env.VITE__DATABASE_ID),
    appwriteCollectionId: String(import.meta.env.VITE__COLLECTION_ID),
    appwriteBucketId: String(import.meta.env.VITE__BUCKET_ID),
}   

export default conf