<template>
  <div class="bg-white border-lg shadow-md max-w-xl p-5">
    <div class="content">
      <div>
        <slot name="header"></slot>
      </div>
      <div>
        <slot></slot>
      </div>
      <div>
        <slot name="footer">
          default footer
        </slot>
      </div>
    </div>
  </div>
</template>