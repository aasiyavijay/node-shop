const deleteProduct = (btn) => {
  const productId = btn.parentNode.querySelector("[name=productId]").value;
  const csrf = btn.parentNode.querySelector("[name=_csrf]").value;

  const productElement = btn.closest("article");

  fetch(`/admin/product/${productId}`, {
    method: "DELETE",
    headers: {
      "csrf-token": csrf,
    },
  })
    .then((res) => {
      console.log(res);
      if (!res.ok) {
        return res.json().then((data) => {
          throw new Error(data.message || "Failed to delete product");
        });
      }

      return res.json();
    })
    .then((data) => {
      console.log(data);
      productElement.remove();
    })
    .catch((err) => {
      console.log("err", err);
      alert(err?.message || "failed");
    });
};
