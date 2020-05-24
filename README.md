# mern-stack-api-vercel
Deployment example for MERN stack API with Vercel (ZEIT Now)

### Deploy API through Vercel
* To connect to MongoDB, you will need your MongoDB connection string.
You can get the connection string by clicking "Connect" on the Cluster Overview page within the MongoDB Atlas dashboard, then choosing "Connect your Application":
[Connect page on MogoDB Atlas dashboard](https://cloud.mongodb.com/v2/5ec174057fecfb55f3e8f6e8#clusters/connect?clusterId=Cluster0)

* To use your MongoDB connection string without hard-coding it in your project, you can add your connection string to the project as a Secret using the Vercel CLI to keep them secure:
> ```bash
> ~$ vercel secrets add my-mongodb-uri mongodb+srv://<user>:<password>@my-cluster-uf345.mongodb.net/<database-name>?retryWrites=true
> ```

* To support API endpoints, make sure that routes are configured in vercel.json  
[Vercel Configuration - routes](https://vercel.com/docs/configuration#project/routes)

* Make sure that the cluster has whitelisted connections from anywhere, since Vercel does not support static IP addresses.
[Network Access at Atlas](https://cloud.mongodb.com/v2/5ec174057fecfb55f3e8f6e8#security/network/whitelist)

### Run Server
```bash
~$ yarn start
```

### Test Local Deployment
```bash
~$ vercel dev
```

### Deploy Server
```bash
~$ vercel
~$ vercel --prod
```

### References
[Create and Deploy a MongoDB-Powered Node.js API with Vercel](https://vercel.com/guides/deploying-a-mongodb-powered-api-with-node-and-vercel)  
[Vercel Configuration - routes](https://vercel.com/docs/configuration#project/routes)
