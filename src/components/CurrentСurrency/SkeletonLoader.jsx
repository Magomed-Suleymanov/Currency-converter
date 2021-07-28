import React from 'react';
import Skeleton from 'react-loading-skeleton';
import Box from '@material-ui/core/Box';

function SkeletonLoader() {
  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];
  return (
    <Box>
      {skeleton.map((item, id) => {
        return (
          <Box marginBottom='3px' key={id}>
            <Skeleton width='100%' height='35px' />
          </Box>
        );
      })}
    </Box>
  );
}

export default SkeletonLoader;
