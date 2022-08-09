import { Blockquote, Button, Grid, Select } from "@mantine/core";
import React, { useState } from "react";
const FilterBox = ({ allSchedule }) => {

/* 

 const getMaleSex = allSchedule.filter(sex => sex.sex === "Male");
 const getFamaleSex = allSchedule.filter(sex => sex.sex === "Female");
 const getMarried = allSchedule.filter(maritalStatus => maritalStatus.maritalStatus === "Married");
 const getSingle = allSchedule.filter(maritalStatus => maritalStatus.maritalStatus === "Single");
 const getDivorced = allSchedule.filter(maritalStatus => maritalStatus.maritalStatus === "Divorced");

const getDhaka = allSchedule.filter(division => division.division === "Dhaka")
const getKhulna = allSchedule.filter(division => division.division === "Khulna")
const getSylhet = allSchedule.filter(division => division.division === "Sylhet")
const getRangpur = allSchedule.filter(division => division.division === "Rangpur")
const getRajshahi= allSchedule.filter(division => division.division === "Rajshahi")
const getChittagong = allSchedule.filter(division => division.division === "Chittagong")
const getComilla= allSchedule.filter(division => division.division === "Comilla")
const getMyminsingh= allSchedule.filter(division => division.division === "Myminsingh")
 */
const [sex,setSex]= useState('')
const [maritalStatus,setMaritalStatus] = useState('')
const [division, setDivision] = useState('')

const filteredSchedule = allSchedule.filter(schedule=>schedule.sex===sex && schedule.maritalStatus===maritalStatus && schedule.division===division)

const handleSearch=()=>{
  console.log(filteredSchedule)
}
  return (
    <div className="filter-container">
      <Grid>
        <Grid.Col md={12} lg={6}>
          <div className="filter-box">
            <div className="input-area">
              <div>
                {" "}
                <Select
                 
                  label="I am Looking"
                  placeholder="Pick one"
                  searchable
                  onChange={setSex}
                  value={sex}
                  nothingFound="No options"
                  data={["Male", "Female"]}
                />
              </div>
              <div>
                {" "}
                <Select
                  label="Marital Status"
                  placeholder="Pick one"
                  searchable
                  onChange={setMaritalStatus}
                  value={maritalStatus}
                  nothingFound="No options"
                  data={["Married", "Single", "Divorced"]}
                />
              </div>
              <div>
                {" "}
                <Select
                  label="Division"
                  placeholder="Pick one"
                  searchable
                  onChange={setDivision}
                  value={division}
                  nothingFound="No options"
                  data={["Dhaka", "Chittagong", "Sylhet", "Comilla"]}
                />
              </div>
            </div>
            <div className="btn-area">
              <Button
                variant="gradient"
                gradient={{ from: "indigo", to: "cyan" }}
                onClick={handleSearch}
              >
              
                FIND BIO DATA
              </Button>
            </div>
          </div>
        </Grid.Col>
        <Grid.Col md={12} lg={6} className="text">
          <Blockquote color="red" cite="Bayhaqi, Shu'abul Iman - 5486">
            <h1>
              {" "}
              A person who marries fulfills half of his religion. For the other
              half let him fear Allah.
            </h1>
          </Blockquote>
        </Grid.Col>
      </Grid>
    </div>
  );
};

export default FilterBox;
