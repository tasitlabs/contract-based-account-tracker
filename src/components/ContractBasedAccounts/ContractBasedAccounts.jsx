import React from 'react'
import {
  Card,
  CardContent,
  CardActionArea,
  Grid,
  Typography,
  createStyles,
  withStyles,
} from '@material-ui/core'

const contractBasedAccountStyles = theme =>
  createStyles({
    actionArea: {
      maxWidth: 300,
    },
    id: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
  })

const ContractBasedAccount = ({ classes, id }) => (
  <Grid item>
    <Card>
      <CardActionArea className={classes.actionArea}>
        <CardContent>
          <Typography variant="h6" component="h3" className={classes.id}>
            {id}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  </Grid>
)

const StyledContractBasedAccount = withStyles(contractBasedAccountStyles)(
  ContractBasedAccount
)

const contractBasedAccountsStyles = theme =>
  createStyles({
    title: {
      marginTop: theme.spacing.unit * 2,
    },
  })

const ContractBasedAccounts = ({ classes, contractBasedAccounts }) => (
  <Grid container direction="column" spacing={16}>
    <Grid item>
      <Typography variant="title" className={classes.title}>
        Gnosis Safe
      </Typography>
      <Typography color="textSecondary">
        {contractBasedAccounts.length} contract-based accounts
      </Typography>
    </Grid>
    <Grid item>
      <Grid container direction="row" spacing={16}>
        {contractBasedAccounts.map(contractBasedAccount => (
          <StyledContractBasedAccount
            key={contractBasedAccount.id}
            {...contractBasedAccount}
          />
        ))}
      </Grid>
    </Grid>
  </Grid>
)

export default withStyles(contractBasedAccountsStyles)(ContractBasedAccounts)
