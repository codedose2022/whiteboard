import React, { useState, useRef, useEffect } from "react";
import { DataGrid, GridToolbar } from "@material-ui/data-grid";
import {
  Grid,
  IconButton,
  Fab,
  TextField,
  FormControl,
  InputLabel,
  Button,
  CircularProgress,
  Typography,
} from "@material-ui/core";
import AddIcon from "@material-ui/icons/Add";
import DeleteIcon from "@material-ui/icons/Delete";
import ModalPop from "../Modal/ModalPop";
import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from "yup";
import useStyles from "./MainTableStyles";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
import {
  addProject,
  updateProject,
  deletePost,
} from "../../../actions/boardData";
import moment from "moment";
import clsx from "clsx";
import EditIcon from "@material-ui/icons/Edit";

function MainTable(currentId, setCurrentId) {
  const boardData = useSelector((state) => state.boardData);
  const [project, setProject] = useState({
    projectName: "",
    projectEngr: "",
    tlExpiry: "",
    releaseDate: "",
  });

  const [addProjectPop, setAddProjectPop] = useState(false);
  const [deletProjectPop, setDeletProjectPop] = useState(false);
  const [projectId, setProjectId] = useState("");
  const classes = useStyles();
  const dispatch = useDispatch();
  const formRef = useRef();
  const handleAddProject = () => {
    setAddProjectPop(true);
  };
  const handleClose = () => {
    setAddProjectPop(false);
    setDeletProjectPop(false);
  };
  const deleteProject = (params) => {
    setDeletProjectPop(true);
    setProjectId(params.row.pid)
  };

  const daysBtwn = (aDate, now) => {
    let totDays = Math.floor(moment.duration(moment(aDate).diff(now)).asDays());
    return totDays;
  };

  const columns = [
    {
      field: "id",
      headerName: "SlNo",
      width: 83,
      renderCell: (params) => (
        <>
          {params.value}
          <div className={classes.absoluteBtn}>
            <IconButton
              size="small"
              className={classes.delete}
              onClick={() => deleteProject(params)}
              // onClick={() => console.log(params.row.pid)}
            >
              <DeleteIcon />
            </IconButton>

            <ModalPop
              width="400px"
              title="Delete Project"
              isOpen={deletProjectPop}
              handleClose={handleClose}
              content={
                <Grid container>
                  <Grid item sm={12}>
                    <Typography variant="h6">
                      Are you sure you want to delete this project?
                    </Typography>
                  </Grid>
                  <Grid
                    item
                    sm={12}
                    style={{
                      marginTop: "1rem",
                      display: "flex",
                      justifyContent: "flex-end",
                    }}
                  >
                    <Button
                      color="primary"
                      variant="contained"
                      onClick={() => dispatch(deletePost(projectId), setDeletProjectPop(false))}
                      // onClick={() => console.log(projectId)}
                    >
                      Confirm
                    </Button>
                  </Grid>
                </Grid>
              }
            />
          </div>
        </>
      ),
    },
    {
      field: "userName",
      headerName: "Name of Engr.",
      width: 200,
    },
    { field: "projectName", headerName: "Project name", width: 300 },
    { field: "tlExpiry", headerName: "Expiry date (TL)", width: 170 },
    {
      field: "tlDays",
      headerName: "Days",
      width: 85,
      headerClassName: "MuiDataGrid-colCellRight",
      cellClassName: (params) =>
        clsx("super-app", {
          negative: params.value <= 0,
          positive: params.value > 0,
        }),
    },
    { field: "releaseDate", headerName: "Release Date", width: 170 },
    {
      field: "releaseDays",
      headerName: "Days",
      width: 85,
      cellClassName: (params) =>
        clsx("super-app", {
          negative: params.value <= 0,
          positive: params.value > 0,
        }),
    },
  ];

  let projectData = [];
  let count = 1;
  boardData.map((project) => {
    let projects = {
      id: count,
      pid: project._id,
      projectName: project.projectName,
      userName: project.projectEngr,
      tlExpiry: moment(project.tlExpiry).format("MM-DD-YYYY"),
      tlDays: daysBtwn(project.tlExpiry, moment()),
      releaseDate: moment(project.releaseDate).format("MM-DD-YYYY"),
      releaseDays: daysBtwn(project.releaseDate, moment()),
    };
    projectData.push(projects);
    count += 1;
  });

  return (
    <div>
      <Grid container>
        <Grid item sm={12}>
          <Fab
            color="primary"
            aria-label="add"
            onClick={handleAddProject}
            size="small"
            className={classes.fab}
          >
            <AddIcon />
          </Fab>
        </Grid>
      </Grid>
      <div
        style={{
          height: "calc(100vh - 85px)",
          width: "100%",
        }}
      >
        <DataGrid
          rows={projectData}
          pid={projectData.pid}
          columns={columns}
          components={{
            Toolbar: GridToolbar,
          }}
          disableSelectionOnClick
          className={classes.styledCell}
        />
        <ModalPop
          title="Add new project"
          isOpen={addProjectPop}
          handleClose={handleClose}
          content={
            <Formik
              innerRef={formRef}
              initialValues={{
                projectName: "",
                projectEngr: "",
                tlExpiry: "",
                releaseDate: "",
              }}
              validationSchema={Yup.object({
                projectName: Yup.string().required("What is the project name?"),
                projectEngr: Yup.string().required("Who is the engineer?"),
                tlExpiry: Yup.string().required(
                  "When is the trade license expiry?"
                ),
                releaseDate: Yup.string().required("When is the release date?"),
              })}
              onSubmit={(values, { setSubmitting }) => {
                setTimeout(() => {
                  dispatch(addProject(values, setSubmitting));
                  setSubmitting(false);
                  setAddProjectPop(false);
                }, 2500);
              }}
            >
              {(formik) => (
                <Form onSubmit={formik.handleSubmit} currentid={currentId}>
                  <FormControl className={classes.formControl} fullWidth>
                    <Field
                      as={TextField}
                      label="Project name"
                      name="projectName"
                    />
                    <ErrorMessage
                      className={classes.error}
                      component="div"
                      name="projectName"
                    />
                  </FormControl>
                  <FormControl className={classes.formControl} fullWidth>
                    <Field
                      as={TextField}
                      label="Name of Engineer"
                      name="projectEngr"
                    />
                    <ErrorMessage
                      className={classes.error}
                      component="div"
                      name="projectEngr"
                    />
                  </FormControl>
                  <FormControl
                    className={`${classes.formControl} ${classes.shrinkLabel}`}
                    fullWidth
                  >
                    <InputLabel
                      component="legend"
                      shrink={true}
                      className={classes.formikShrinkLabel}
                    >
                      License expiry date
                    </InputLabel>
                    <Field as={TextField} name="tlExpiry" type="date" />
                    <ErrorMessage
                      className={classes.error}
                      component="div"
                      name="tlExpiry"
                    />
                  </FormControl>
                  <FormControl
                    className={`${classes.formControl} ${classes.shrinkLabel}`}
                    fullWidth
                  >
                    <InputLabel
                      component="legend"
                      shrink={true}
                      className={classes.formikShrinkLabel}
                    >
                      Release date
                    </InputLabel>
                    <Field as={TextField} name="releaseDate" type="date" />
                    <ErrorMessage
                      className={classes.error}
                      component="div"
                      name="releaseDate"
                    />
                  </FormControl>
                  <Grid container>
                    <Grid
                      item
                      sm={12}
                      style={{
                        marginTop: "1rem",
                        display: "flex",
                        justifyContent: "flex-end",
                      }}
                    >
                      <Button variant="contained" type="submit" color="primary">
                        {formik.isSubmitting ? (
                          <CircularProgress color="inherit" size={25} />
                        ) : (
                          "Submit"
                        )}
                      </Button>
                    </Grid>
                  </Grid>
                </Form>
              )}
            </Formik>
          }
        />
      </div>
    </div>
  );
}

export default MainTable;
