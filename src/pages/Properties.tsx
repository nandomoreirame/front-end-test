import React, { useEffect, useState } from 'react';
import PropertyCard from 'src/components/Property/Card';
import { Grid, Typography, Box } from '@material-ui/core';
import { useStateProperties, useStateUsers } from 'src/hooks';
import { PropertyInterface } from 'src/interfaces';

interface PropertiesPageProps {}

export const PropertiesPage: React.FC<PropertiesPageProps> = (props: PropertiesPageProps) => {
  const [stateUsers] = useStateUsers();
  const [stateProperties] = useStateProperties();
  const [properties, setProperties] = useState<PropertyInterface[]>([]);

  useEffect(() => {
    const { user } = stateUsers;
    const { list } = stateProperties;
    const newlist =
      user?.role === 'admin'
        ? list
        : list?.filter(({ id }) => (id ? user?.propertyIds?.includes(id) : false));

    setProperties(newlist);
  }, [stateUsers, stateProperties]);

  return (
    <Box component="section">
      <Box component="header" mb={4}>
        <Typography component="h1" variant="h2">
          Propriedades
        </Typography>
      </Box>
      <Grid container spacing={4}>
        {properties.length > 0 &&
          properties.map((property: PropertyInterface) => (
            <Grid key={property.id} item>
              <PropertyCard property={property} />
            </Grid>
          ))}
      </Grid>
    </Box>
  );
};

export default PropertiesPage;
