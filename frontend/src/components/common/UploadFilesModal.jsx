import React, { useState } from "react";
import Modal from "@mui/material/Modal";
import Stack from "./Stack";
import { useTheme } from "@mui/material/styles";
import Text from "./Text";
import { DropzoneArea } from "react-mui-dropzone";
import { makeStyles } from "@mui/styles";
import CloseIcon from "@mui/icons-material/Close";
import { InputLabel } from "@mui/material";
import CustomButton from "./CustomButton";
import Box from "./Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 400,
  bgcolor: "#fff",
  borderRadius: "8px",
  pt: 3,
  px: 3,
  pb: 3,
};

function UploadFilesModal({
  handleChange,
  acceptedFileTypes,
  multipleFiles,
  label,
  name,
  group,
  fileHeader,
  fileSubtitle,
  onCancelClick,
  onAttachClick,
  open,
}) {
  const [error, setError] = useState("");
  const [selectedFiles, setSelectedFiles] = useState([]);
  const [selectedFileName, setSelectedFileName] = useState("");
  const fileSelected = selectedFiles.length > 0;
  const classes = useStyles();
  const theme = useTheme();

  const handleDrop = (acceptedFiles, rejectedFiles) => {
    if (rejectedFiles && rejectedFiles.length > 0) {
      const unsupportedTypes = rejectedFiles
        .map((file) => file.file.type)
        .join(", ");
      setError(`Unsupported file types: ${unsupportedTypes}`);
    } else {
      setError("");
      setSelectedFiles(acceptedFiles);
      if (acceptedFiles.length > 0) {
        setSelectedFileName(acceptedFiles[0].name);
        handleChange({ name, value: acceptedFiles, group });
      }
    }
  };

  const handleFileRemove = () => {
    setSelectedFiles([]);
    setSelectedFileName("");
  };

  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={{ ...style, width: 600 }}>
          <Stack
            direction="row"
            justifyContent={"space-between"}
            spacing={1}
            display={"flex"}
            alignItems={"center"}
          >
            <Text
              variant="typo18"
              sx={{
                color: theme.palette.grey?.[900],
                fontWeight: theme.typography.fontWeightMedium,
              }}
            >
              {fileHeader}
            </Text>
            <img
              src="/assets/icons/close-circle.svg"
              alt="closed-circle"
              width={24}
              height={24}
              onClick={onCancelClick}
            />
          </Stack>
          <Text
            sx={{
              color: theme.palette.grey?.[400],
              fontSize: theme.typography.fontSize,
              fontWeight: theme.typography.fontWeightLight,
              lineHeight: "24px",
              mb: 1.5,
            }}
          >
            {fileSubtitle}
          </Text>

          {fileSelected ? (
            <>
              <InputLabel
                sx={{
                  marginBottom: "6px",
                  fontSize: "0.875rem",
                }}
              >
                {label}
              </InputLabel>
              <div className={classes.file_dropzone}>
                <Stack direction="row" spacing={2} alignItems={"center"}>
                  <img
                    src="/assets/icons/file.svg"
                    alt="file"
                    className={classes.file}
                  />
                  {selectedFileName && <span>{selectedFileName}</span>}
                </Stack>
                <CloseIcon
                  fontSize="small"
                  className={classes.cancel}
                  onClick={handleFileRemove}
                />
              </div>
            </>
          ) : (
            <div className={classes.root}>
              {error && <p className={classes.errorText}>{error}</p>}
              <InputLabel
                sx={{
                  marginBottom: "6px",
                  fontSize: "0.875rem",
                }}
              >
                {label}
              </InputLabel>
              <DropzoneArea
                dropzoneClass={classes.dropzone}
                dropzoneText=""
                filesLimit={multipleFiles ? undefined : 1}
                Icon={() => (
                  <Stack
                    spacing={1}
                    sx={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <img
                      src="/assets/icons/solar_upload-square-broken.svg"
                      alt="solar_upload"
                      className={classes.icon}
                    />
                    <p className={classes.customText}>
                      Drag & drop to upload or
                      <span className={classes.spanText}> Browse</span>
                    </p>
                  </Stack>
                )}
                acceptedFiles={acceptedFileTypes} //{['image/jpeg', 'image/png', 'image/bmp']}
                onChange={handleDrop}
              />
            </div>
          )}
          <Stack direction="row" spacing={1} mt={3}>
            <CustomButton
              variant="outlined"
              text="Cancel"
              size="medium"
              color="secondary"
              sx={{
                width: "100%",
              }}
              onClick={onCancelClick}
            />
            <CustomButton
              sx={{
                width: "100%",
              }}
              variant="contained"
              text={fileSelected ? "Done" : "Attach files"}
              size="medium"
              onClick={onAttachClick}
            />
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}

export default UploadFilesModal;

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiDropzoneArea-root": {
      minHeight: 0,
    },
  },
  dropzone: {
    width: "100%",
    border: "1px dashed #A2A7AE",
    backgroundColor: theme.palette.secondary.main,
    borderRadius: "8px",
    padding: "40px 64px",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    cursor: "pointer",
  },
  file_dropzone: {
    width: "100%",
    border: "1px solid #A2A7AE",
    backgroundColor: theme.palette.grey.white,
    borderRadius: "8px",
    padding: "14px 24px",
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    cursor: "pointer",
    minHeight: "55px",
    height: "55px",
  },
  file: {
    width: "34px",
    height: "34px",
    padding: "8.5px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "17px",
    backgroundColor: theme.palette.grey?.[100],
  },
  cancel: {
    width: "20px",
    height: "20px",
    padding: "3px",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "17px",
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
  },
  customText: {
    fontWeight: theme.typography.fontWeightMedium,
    fontSize: "1rem",
    color: theme.palette.grey.light,
  },
  icon: {
    width: "48px",
    height: "48px",
  },
  spanText: {
    color: theme.palette.grey?.[600],
  },
  errorText: {
    color: "red",
    fontWeight: "bold",
    marginBottom: "10px",
  },
}));
