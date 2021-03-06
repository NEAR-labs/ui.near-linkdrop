import { formatNearBalance } from '../../../../../../utils/format';
import { Near } from '../../../../../general/icons/Near';
import { useStyles } from './Info.styles';

export const Info = ({ walletAccountId, availableBalance }) => {
  const classes = useStyles();
  return (
    <div className={classes.container}>
      <Near className={classes.nearIcon} />
      <span className={classes.walletId}>Wallet ID</span>
      <span className={classes.account}>{walletAccountId}</span>
      <span className={classes.balance}>Balance</span>
      <span className={classes.amount}>{formatNearBalance(availableBalance)}</span>
    </div>
  );
};
