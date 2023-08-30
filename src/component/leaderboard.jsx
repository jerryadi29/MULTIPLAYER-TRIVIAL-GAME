import { useState,useEffect } from 'react';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import { Paper } from '@mui/material';
import styled from 'styled-components';
import TableRow from '@mui/material/TableRow';
import '../style/table.css'
import {getInitialData,getRankedData} from '../assests/ranking'





const LeaderBoardComponent=()=>{

    const [ranking,setRanking]=useState(getRankedData());
 
    return(
        <>
            <TableContainer component={Paper} >
                <Table sx={{minWidth:900}} stickyheader>
                    <TableHead style={{background:'#000dff61'}}>
                        <TableRow>
                            <TableCell align="center">
                                Rank
                            </TableCell>
                            <TableCell align="center">
                               Name
                            </TableCell>
                            <TableCell align="center">
                                Scores
                            </TableCell>
                        </TableRow>
                    </TableHead>

                <TableBody>
                    {
                        ranking.map((players)=>{
                            
                            return(
                                <TableRow className='tablerow'>
                                <TableCell align="center">{players.rank ? players.rank : "nill"}</TableCell>
                                <TableCell align="center">{ players.name }</TableCell>
                                <TableCell align="center">{ players.score}</TableCell>
                            </TableRow>
                            );  
                            console.log(players)
                        })
                    }
                </TableBody>

                </Table>

            </TableContainer>
        </>
    );

}

export default LeaderBoardComponent