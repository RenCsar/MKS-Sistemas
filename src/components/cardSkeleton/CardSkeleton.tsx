import { Box, Skeleton, Typography } from "@mui/material"
import { BoxSkeleton } from "./CardSkeleton.Styled"

export const CardSkeleton = () => {
    return (
        <BoxSkeleton>
            <Box className='img-container' sx={{ marginTop: '10px' }}>
                <Skeleton
                    variant="rounded"
                    width={150}
                    height={100}
                />
            </Box>
            <Box className='title-container'>
                <Box className='name-container'>
                    <Skeleton
                        variant="rounded"
                        width={100}
                        height={30}
                    />
                </Box>
                <Box >
                    <Skeleton
                        variant="rounded"
                        width={65}
                        height={26}
                    />
                </Box>
            </Box>
            <Box className='description-container'>
                <Skeleton
                    variant="rounded"
                    width={200}
                    height={40}
                />
            </Box>
            <Box
                className='comprar-container'
            >
                <Typography variant='h6'>
                    COMPRAR
                </Typography>
            </Box>   
        </BoxSkeleton>
    )
}