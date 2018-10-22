import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import AdminLayout from '../../../Hoc/AdminLayout';

import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import CircularProgress from '@material-ui/core/CircularProgress';

import {firebaseMatches} from '../../../firebase';
import {firebaseLooper, reverseArray} from '../../ui/misc';


class AdminMatches extends Component {

  state = {
    isloading: true,
    matches: []
  }

  componentDidMount(){
    firebaseMatches.once('value').then(snapshot => {
      const matches = firebaseLooper(snapshot);

      this.setState({
        isloading: false,
        matches: reverseArray(matches)
      })
    });
  }

  render() {
    return (
        <AdminLayout>
          <div>
            <Paper>
              <Table>
                <TableHead>
                  <TableRow>
                    <TableCell>Date</TableCell>
                    <TableCell>Match</TableCell>
                    <TableCell>Result</TableCell>
                    <TableCell>Final</TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {
                    this.state.matches ?
                      this.state.matches.map((match,i) => (
                        <TableRow key={i}>
                          <TableCell>{match.date}</TableCell>
                          <TableCell>
                            <Link to={`/admin_matches/edit_match/${match.id}`}>
                              {match.away} <strong>-</strong> {match.local}
                            </Link>
                          </TableCell>
                          <TableCell>
                            {match.resultAway} <stromg>-</stromg> {match.resultLocal}
                          </TableCell>
                          <TableCell>
                            {match.final === "Yes" ?
                              <span className="matches_tag_green">Done</span>
                              :
                              <span className="matches_tag_red">Not played yet</span>

                            }
                          </TableCell>

                        </TableRow>
                      ))
                    :null
                  }
                </TableBody>
              </Table>
            </Paper>

            <div className="admin_progress">
              {this.state.isloading ?
                <CircularProgress thickness={1} style={{color:'light-blue'}}/>

                : null

              }
            </div>
          </div>

        </AdminLayout>
    );
  }
}
export default AdminMatches;
