/* eslint-disable */
import { Button } from '@material-ui/core';
import { KeyboardArrowLeft } from '@material-ui/icons';
import { Info } from './Info/Info';
import { getCampaignData } from './getCampaignData';
import { CampaignProfileCard } from './CampaignProfileCard/CampaignProfileCard';
import { useStyles } from './Step2.styles';

export const Step2 = ({ setStep, getValues, walletAccountId, availableBalance }) => {
  const classes = useStyles();

  const campaignData = getCampaignData(getValues);

  return (
    <div className={classes.container}>
      <CampaignProfileCard campaign={campaignData} />
      <Info
        walletAccountId={walletAccountId}
        balance={availableBalance}
        campaignData={campaignData}
      />
      <div className={classes.actions}>
        <Button onClick={() => setStep(1)} className={classes.back}>
          <KeyboardArrowLeft />
          &nbsp;Back
        </Button>
        <Button variant="contained" color="primary" type="submit" className={classes.confirm}>
          Confirm
        </Button>
      </div>
    </div>
  );
};
