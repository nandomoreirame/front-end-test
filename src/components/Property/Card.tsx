import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import {
  Card,
  CardContent,
  Typography,
  CardActions,
  Button,
  Popover,
  Box,
} from '@material-ui/core';
import PopupState, { bindTrigger, bindPopover } from 'material-ui-popup-state';
import { PropertyInterface } from 'src/interfaces';

const useStyles = makeStyles({
  root: {
    minWidth: 275,
  },
  pos: {
    marginBottom: 12,
  },
  button: {
    color: '#ababab',
  },
});

interface PropertyCardProps {
  property: PropertyInterface;
}

export const PropertyCard: React.FC<PropertyCardProps> = ({ property }: PropertyCardProps) => {
  const classes = useStyles();
  const { name, cropType, coordinates } = property;

  return (
    <>
      <Card className={classes.root} variant="outlined">
        <CardContent>
          {name && (
            <Typography variant="h5" component="h2">
              {name}
            </Typography>
          )}
          {cropType && (
            <Typography className={classes.pos} color="textSecondary">
              {cropType}
            </Typography>
          )}
          {coordinates && coordinates?.length > 0 && (
            <Typography variant="body2" component="p">
              <strong>Coordenadas:</strong> Lat: {coordinates[0]} Long: {coordinates[1]}
            </Typography>
          )}
        </CardContent>
        <CardActions>
          <PopupState variant="popover" popupId="demo-popup-popover">
            {(popupState) => (
              <div>
                <Button
                  size="small"
                  className={classes.button}
                  variant="text"
                  {...bindTrigger(popupState)}
                >
                  Mais detalhes
                </Button>
                <Popover
                  {...bindPopover(popupState)}
                  anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center',
                  }}
                  transformOrigin={{
                    vertical: 'top',
                    horizontal: 'center',
                  }}
                >
                  <Box p={2}>
                    <Typography>Produtividade:</Typography>
                  </Box>
                </Popover>
              </div>
            )}
          </PopupState>
        </CardActions>
      </Card>
    </>
  );
};

export default PropertyCard;
