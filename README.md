## Getting started

### Hosted Service

#### Connect this dapp to the subgraph

1. Go to `https://thegraph.com/explorer/subgraph/tasitlabs/the-graph-hackathon-subgraph/`
2. Copy the GraphQL HTTP endpoint (`hhttps://api.thegraph.com/subgraphs/name/tasitlabs/the-graph-hackathon-subgraph`)
3. Write it to `.env` in this directory:
   ```sh
   echo "REACT_APP_GRAPHQL_ENDPOINT=https://api.thegraph.com/subgraphs/name/tasitlabs/the-graph-hackathon-subgraph" > .env
   ```
4. Start this app:
   ```sh
   npm i
   npm start
   ```

## Already done - no action required

#### Create and deploy the subgraph

1. Sign up on https://thegraph.com/explorer/
2. Create a new subgraph on https://thegraph.com/dashboard/
3. Install Graph CLI with `npm install -g @graphprotocol/graph-cli`
4. Run `graph init <GITHUB_USERNAME>/<SUBGRAPH_NAME>` to create a subgraph template locally.
5. Follow the instructions `graph init` prints for you to deploy the subgraph to the Hosted Service.
