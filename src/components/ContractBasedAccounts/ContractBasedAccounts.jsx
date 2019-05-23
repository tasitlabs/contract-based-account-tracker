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
    displayName: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    id: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
    owner: {
      textOverflow: 'ellipsis',
      overflow: 'hidden',
    },
  })

const ContractBasedAccount = ({ classes, id, displayName, owner }) => (
  <Grid item>
    <Card>
      <CardActionArea className={classes.actionArea}>
        <CardContent>
          <Typography
            variant="h6"
            component="h3"
            className={classes.displayName}
          >
            {displayName || '—'}
          </Typography>
          <Typography color="textSecondary">ID</Typography>
          <Typography component="p" className={classes.id}>
            {id}
          </Typography>
          <Typography color="textSecondary">Owner</Typography>
          <Typography component="p" className={classes.owner}>
            {owner}
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
        {contractBasedAccounts.length} ContractBasedAccounts
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
