import React, { Component } from 'react'
import ApolloClient, { gql, InMemoryCache } from 'apollo-boost'
import { ApolloProvider, Query } from 'react-apollo'
import {
  Grid,
  LinearProgress,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  Button,
} from '@material-ui/core'
import './App.css'
import Header from './components/Header'
import Error from './components/Error'
import ContractBasedAccounts from './components/ContractBasedAccounts'
import Filter from './components/Filter'
import MAX_QUERY_AMOUNT from './constants'

if (!process.env.REACT_APP_GRAPHQL_ENDPOINT_GNOSIS_SAFE) {
  throw new Error(
    'REACT_APP_GRAPHQL_ENDPOINT_GNOSIS_SAFE environment variable not defined'
  )
}

if (!process.env.REACT_APP_GRAPHQL_ENDPOINT_ARGENT) {
  throw new Error(
    'REACT_APP_GRAPHQL_ENDPOINT_ARGENT environment variable not defined'
  )
}

const clientDefault = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT_GNOSIS_SAFE,
  cache: new InMemoryCache(),
})

const clientArgent = new ApolloClient({
  uri: process.env.REACT_APP_GRAPHQL_ENDPOINT_ARGENT,
  cache: new InMemoryCache(),
})

const GNOSIS_SAFE_QUERY = gql`
  query contractBasedAccounts(
    $where: ContractBasedAccount_filter!
    $orderBy: ContractBasedAccount_orderBy!
    $first: Int
  ) {
    contractBasedAccounts(
      first: $first
      where: $where
      orderBy: $orderBy
      orderDirection: desc
    ) {
      id
      timeCreated
    }
  }
`

const ARGENT_QUERY = gql`
  query contractBasedAccounts(
    $where: ContractBasedAccount_filter!
    $orderBy: ContractBasedAccount_orderBy!
    $first: Int
  ) {
    contractBasedAccounts(
      first: $first
      where: $where
      orderBy: $orderBy
      orderDirection: desc
    ) {
      id
      timeCreated
    }
  }
`

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      orderBy: 'timeCreated',
      showHelpDialog: false,
    }
  }

  toggleHelpDialog = () => {
    this.setState(state => ({
      ...state,
      showHelpDialog: !state.showHelpDialog,
    }))
  }

  gotoQuickStartGuide = () => {
    window.location.href = 'https://tasit.io'
  }

  render() {
    const { orderBy, showHelpDialog } = this.state

    return (
      <ApolloProvider client={clientDefault}>
        <div className="App">
          <Grid container direction="column">
            <Header onHelp={this.toggleHelpDialog} />
            <Filter
              orderBy={orderBy}
              onOrderBy={field =>
                this.setState(state => ({ ...state, orderBy: field }))
              }
            />
            <Grid item>
              <Grid container>
                <Query
                  query={GNOSIS_SAFE_QUERY}
                  variables={{
                    where: {},
                    orderBy: orderBy,
                    first: MAX_QUERY_AMOUNT,
                  }}
                >
                  {({ data, error, loading }) => {
                    return loading ? (
                      <LinearProgress
                        variant="query"
                        style={{ width: '100%' }}
                      />
                    ) : error ? (
                      <Error error={error} />
                    ) : (
                      <ContractBasedAccounts
                        contractBasedAccounts={data.contractBasedAccounts}
                        name={'Gnosis Safe'}
                        notes={''}
                      />
                    )
                  }}
                </Query>
              </Grid>
            </Grid>
            <Grid item>
              <Grid container>
                <Query
                  query={ARGENT_QUERY}
                  client={clientArgent}
                  variables={{
                    where: {},
                    orderBy: orderBy,
                    first: MAX_QUERY_AMOUNT,
                  }}
                >
                  {({ data, error, loading }) => {
                    return loading ? (
                      <LinearProgress
                        variant="query"
                        style={{ width: '100%' }}
                      />
                    ) : error ? (
                      <Error error={error} />
                    ) : (
                      <ContractBasedAccounts
                        contractBasedAccounts={data.contractBasedAccounts}
                        name={'Argent'}
                        notes={''}
                      />
                    )
                  }}
                </Query>
              </Grid>
            </Grid>
          </Grid>
          <Dialog
            fullScreen={false}
            open={showHelpDialog}
            onClose={this.toggleHelpDialog}
            aria-labelledby="help-dialog"
          >
            <DialogTitle id="help-dialog">{"What's Tasit?"}</DialogTitle>
            <DialogContent>
              <DialogContentText>
                There's more info about the Tasit project over at tasit.io.
                Should we take you there now?
              </DialogContentText>
            </DialogContent>
            <DialogActions>
              <Button onClick={this.toggleHelpDialog} color="primary">
                Nah, I'm good
              </Button>
              <Button
                onClick={this.gotoQuickStartGuide}
                color="primary"
                autoFocus
              >
                Yes, please
              </Button>
            </DialogActions>
          </Dialog>
        </div>
      </ApolloProvider>
    )
  }
}

export default App
