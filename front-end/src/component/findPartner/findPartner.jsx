import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import { useParams } from 'react-router-dom';
import Pagination from '../../more/Pagination';
import { Spinner } from '../../more/Spinner';
import { get_schedules } from "../../store/actions/scheduleAction";
import Layout from '../basc/layout/Layout';
import BioDataCard from './BioDataCard';
import FilterBox from './FilterBox';
const FindPartner = () => {
    const { currentPage } = useParams();

    console.log(currentPage );
    const dispatch = useDispatch();
    

    const {allSchedule,
        scheduleCounts,
        perPage}= useSelector(state => state.ScheduleReducer);

        // console.log(allSchedule , scheduleCounts , perPage);
    

    useEffect(() => {
    
        dispatch(get_schedules(currentPage ? currentPage.split("-")[1] : 1));
        // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [currentPage]);

      
  
    
    return (
        <>
        <Layout >
            <div className="find-partner">
                <div className="margin-container">
                    <FilterBox allSchedule={allSchedule}/>
                    <div className="getting-all-biodata">
                       
                        <div className='biodata-grid'>
                            {
                                allSchedule.length === 0 && <Spinner/>
                            }
                            {
                               allSchedule ?? allSchedule  ? allSchedule.map((s , i) => <BioDataCard s={s} i={i} /> ):
                                <h1>There no Bio Data</h1>
                            }
                        </div>
                    </div>
                   <div className="pagination-area">
                   <Pagination
                    pageNumber={currentPage ? currentPage.split("-")[1] : 1}
                    perPage={perPage}
                    itemCount={scheduleCounts}
                    path="/find-partner"
                  />
                   </div>
                </div>
            </div>
        </Layout>
        </>
    );
};

export default FindPartner;