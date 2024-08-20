export const campaignFormFields = {
  name: {
    placeholder: "Enter your name",
    label: "Your Name *",
    inputType: "text",
  },
  title: {
    placeholder: "Write a title",
    label: "Campaign Title *",
    inputType: "text",
  },
  description: {
    placeholder: "Tell us your reason for the campaign",
    label: "Purpose of Campaign *",
    isTextArea: true,
  },
  goal: {
    placeholder: "ETH 0.50",
    label: "Goal *",
    step: 0.1,
    inputType: "number",
  },
  endDate: {
    placeholder: "dd/mm/yy",
    label: "End Date *",
    inputType: "date",
  },
  image: {
    placeholder: "Place image URL of your campaign",
    label: "Campaign Image *",
    inputType: "text",
  },
};
