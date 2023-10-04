import * as React from "react";
import Modal from "@mui/material/Modal";
import Stack from "components/common/Stack";
import { Avatar } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Text from "components/common/Text";
import CustomButton from "components/common/CustomButton";
import Box from "./Box";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 448,
  bgcolor: "#fff",
  borderRadius: "12px",
  p: 4,
};

export default function CommonModal({
  open,
  closeModal,
  profile,
  title,
  subtitle,
  Yes,
  No,
}) {
  const theme = useTheme();
  return (
    <div>
      <Modal
        open={open}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack
            spacing={1}
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar
              alt={"profile"}
              src={profile}
              sx={{ width: 56, height: 56 }}
            />
            <Text
              variant="typo20"
              sx={{
                fontWeight: theme.typography.fontWeightMedium,
                color: theme.palette.grey?.[900],
              }}
            >
              {title}
            </Text>
            <Text
              sx={{
                fontSize: theme.typography.fontSize,
                color: theme.palette.grey?.[400],
                textAlign: "center",
              }}
            >
              {subtitle}
            </Text>
          </Stack>
          <Stack direction="row" spacing={1} mt={3.5}>
            <CustomButton
              variant="outlined"
              text={No}
              size="medium"
              color="secondary"
              sx={{
                width: "100%",
              }}
              onClick={closeModal}
            />
            <CustomButton
              sx={{
                width: "100%",
              }}
              variant="contained"
              text={Yes}
              size="medium"
              onClick={closeModal}
            />
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
