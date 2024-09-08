<template>
  <div class="container mt-5">
    <table class="table table-bordered table-striped table-hover">
      <thead class="table-dark">
        <tr>
          <th>ID</th>
          <th>Title</th>
          <th>Type</th>
          <th>Priority</th>
          <th>Department Request</th>
          <th>Status</th>
          <th>Created</th>
          <th>Start Date</th>
          <th>End Date</th>
          <th>Author</th>
          <th>Author Department</th>
          <th>Modified</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="(data, index) in initialData.response" :key="index">
          <td>{{ data.ID }}</td>
          <td>{{ data.Title }}</td>
          <td>{{ data.Type.LookupValue }}</td>
          <td>{{ data.Priority }}</td>
          <td>{{ data.Department_Request.LookupValue }}</td>
          <td>{{ data.StatusString }}</td>
          <td>{{ formatDate(data.Created) }}</td>
          <td>{{ formatDate(data.StartDate) }}</td>
          <td>{{ formatDate(data.EndDate) }}</td>
          <td>{{ data.Author.LookupValue }}</td>
          <td>{{ data.Author_Department.LookupValue }}</td>
          <td>{{ formatDate(data.Modified) }}</td>
          <td><button class="btn btn-danger"></button></td>
        </tr>
      </tbody>
    </table>
  </div>
</template>
<script>
import axios from "axios";
import { onMounted, reactive, watch } from "vue";

export default {
  setup() {
    const initialData = reactive({
      response: [],
    });
    const fetchDataFromApi = async () => {
      try {
        const response = await axios.get(
          "https://mocki.io/v1/6bd18e7c-97ef-459b-a935-5188e0b8e3af"
        );
        localStorage.setItem("apiData", JSON.stringify(response.data));
      } catch (error) {
        console.log(error);
      }
    };

    const formatDate = (dateString) => {
      const options = {
        year: "numeric",
        month: "2-digit",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
      };
      return new Date(dateString).toLocaleDateString("vi-VN", options);
    };

    onMounted(() => {
      const storedData = localStorage.getItem("apiData");
      if (storedData) {
        initialData.response = JSON.parse(storedData);
      } else {
        fetchDataFromApi();
      }
    });
    watch();
    return {
      formatDate,
      initialData,
    };
  },
};
</script>
<style></style>
