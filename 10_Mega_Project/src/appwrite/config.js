import {Client, ID, Databases, Storage, Query, Account} from "appwrite"
import conf from "../conf/conf";

export class Service{
    client = new Client;
    Databases;
    bucket;

    constructor(){
        this.client
            .setEndpoint(conf.appwriteUrl)
            .setProject(conf.appwriteProjectId);
        this.Databases = new Databases(this.client);
        this.bucket = new Storage(this.client);
    }

    // create post method
    async createPost({title, content, slug, featuredImage, status, userId}){
        try {
            return await this.Databases.createDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                    userId,
                }
            )
        } catch (error) {
            console.log(error)

        }
    }

    // update post method
    async updatePost(slug, {title, content, featuredImage, status}){
        try {
            return await this.Databases.updateDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
                {
                    title,
                    content,
                    featuredImage,
                    status,
                }

            )
            
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    // delete post method
    async deletePost(slug){
        try {
            await this.Databases.deleteDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug,
            )
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    // get single post method
    async getPsot(slug){
        try {
            await this.Databases.getDocument(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                slug
            )
            return true;
            
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    // get all posts method
    async getPosts(queries = [Query.equal("status", "active")]){
        try {
            return await this.Databases.listDocuments(
                conf.appwriteDatabaseId,
                conf.appwriteCollectionId,
                queries,
            )
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    // -------- file upload services ---------

    // create file method
    async fileUpload(file){
        try {
            return await this.bucket.createFile(
                conf.appwriteBucketId,
                ID.unique(),
                file,
            )
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    // delete file method
    async fileDelete(fileId){
        try {
            await this.bucket.deleteFile(
                conf.appwriteBucketId,
                fileId,
            )
            return true;
        } catch (error) {
            console.log(error)
            return false;
        }
    }

    // preview file method
    getFilePreview(fileId){
        this.bucket.getFilePreview(
            conf.appwriteBucketId,
            fileId,
        )
    }


}

const service = new Service()

export default service;