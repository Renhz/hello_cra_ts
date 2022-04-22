import ReportIcon from '@mui/icons-material/Report';
import { Box, Divider, Grid, Typography } from '@mui/material';
import React from 'react';

import MyPaper from 'components/items/myItems';

function PageNotFound() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <Grid container spacing={2}>
        <Grid item xs={6}>
          <MyPaper sx={{ width: '100%', textAlign: 'center' }}>
            <Typography variant="h4" component="div" gutterBottom>
              <ReportIcon />
              404
              <Divider />
            </Typography>
            <Typography variant="h6" component="div">
              很抱歉，我們找不到您訪問的頁面
              <br /> 請確認輸入的網址是否正確，謝謝
            </Typography>
          </MyPaper>
        </Grid>
        <Grid item xs={4} />
      </Grid>
    </Box>
  );
}

export default PageNotFound;
