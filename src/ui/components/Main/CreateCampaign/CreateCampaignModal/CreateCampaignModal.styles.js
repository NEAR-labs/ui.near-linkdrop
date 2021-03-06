import { makeStyles } from '@material-ui/core';

const styles = (theme) => ({
  modal: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  container: {
    width: 390,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    outline: 'none',
    borderRadius: 8,
  },
  wrapper: {
    width: '80%',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    color: 'rgba(0, 0, 0, 0.7)',
    textAlign: 'center',
    letterSpacing: '0.5px',
  },
  icon: {
    height: 120,
    width: 120,
    marginTop: 80,
  },
  header: {
    fontSize: 24,
    margin: 0,
    marginTop: 24,
    fontWeight: 500,
  },
  description: {
    margin: 0,
    marginTop: 8,
    color: theme.colors.grey450,
  },
  progressLabel: {
    fontSize: 18,
    fontWeight: 500,
    marginTop: 24,
    color: theme.palette.primary.main,
  },
  progress: {
    width: '100%',
    height: 5,
    marginTop: 8,
    marginBottom: 80,
    borderRadius: 4,
    backgroundColor: theme.colors.grey200,
  },
  progressBar: {
    borderRadius: 4,
  },
});

export const useStyles = makeStyles(styles, { name: 'CreateCampaignModal' });
